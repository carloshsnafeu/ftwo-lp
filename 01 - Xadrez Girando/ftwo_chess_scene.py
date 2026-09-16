import bpy
import math
import os
from mathutils import Vector


# Execute este arquivo no Blender em: Scripting > Open > Run Script.
# Os arquivos finais serao gravados em uma pasta "ftwo_chess" na Area de Trabalho.
OUTPUT_DIR = os.path.join(os.path.expanduser("~"), "Desktop", "ftwo_chess")
FPS = 30
FRAME_END = 240


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for datablocks in (bpy.data.meshes, bpy.data.curves, bpy.data.materials, bpy.data.cameras, bpy.data.lights):
        for block in list(datablocks):
            if block.users == 0:
                datablocks.remove(block)


def material(name, color, metallic=0.0, roughness=0.22):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = (*color, 1.0)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    return mat


def lathe(name, profile, mat, segments=96):
    vertices = []
    faces = []

    for i in range(segments):
        angle = 2.0 * math.pi * i / segments
        c, s = math.cos(angle), math.sin(angle)
        for radius, z in profile:
            vertices.append((radius * c, radius * s, z))

    rows = len(profile)
    for i in range(segments):
        nxt = (i + 1) % segments
        for j in range(rows - 1):
            a = i * rows + j
            b = nxt * rows + j
            c = nxt * rows + j + 1
            d = i * rows + j + 1
            faces.append((a, b, c, d))

    mesh = bpy.data.meshes.new(f"{name}_Mesh")
    mesh.from_pydata(vertices, [], faces)
    mesh.update()

    obj = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(mat)

    for polygon in mesh.polygons:
        polygon.use_smooth = True

    bevel = obj.modifiers.new("Soft edges", "BEVEL")
    bevel.width = 0.035
    bevel.segments = 3
    return obj


def cube_part(name, location, scale, mat, bevel=0.09):
    bpy.ops.mesh.primitive_cube_add(location=location)
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)
    modifier = obj.modifiers.new("Rounded edges", "BEVEL")
    modifier.width = bevel
    modifier.segments = 4
    for polygon in obj.data.polygons:
        polygon.use_smooth = True
    return obj


def empty(name, location=(0.0, 0.0, 0.0)):
    obj = bpy.data.objects.new(name, None)
    obj.empty_display_type = "PLAIN_AXES"
    obj.location = location
    bpy.context.collection.objects.link(obj)
    return obj


def parent_keep_transform(child, parent):
    child.parent = parent
    child.matrix_parent_inverse = parent.matrix_world.inverted()


def animate_spin(obj, turns=1.0):
    obj.rotation_mode = "XYZ"
    obj.rotation_euler.z = 0.0
    obj.keyframe_insert(data_path="rotation_euler", index=2, frame=1)
    obj.rotation_euler.z = math.tau * turns
    obj.keyframe_insert(data_path="rotation_euler", index=2, frame=FRAME_END + 1)
    if obj.animation_data and obj.animation_data.action:
        for curve in obj.animation_data.action.fcurves:
            for point in curve.keyframe_points:
                point.interpolation = "LINEAR"
        obj.animation_data.action.name = f"{obj.name}_Loop"


def track_to(obj, target_point):
    direction = Vector(target_point) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def add_area_light(name, location, energy, size, color, target=(0.0, 0.0, 3.0)):
    data = bpy.data.lights.new(name, "AREA")
    data.energy = energy
    data.shape = "DISK"
    data.size = size
    data.color = color
    obj = bpy.data.objects.new(name, data)
    obj.location = location
    bpy.context.collection.objects.link(obj)
    track_to(obj, target)
    return obj


def build_scene():
    clear_scene()
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    white = material("Ivory White", (0.82, 0.82, 0.80), metallic=0.0, roughness=0.24)
    black = material("Gloss Black", (0.006, 0.007, 0.009), metallic=0.12, roughness=0.15)

    # Perfis 2D revolucionados em torno do eixo Z.
    king_profile = [
        (0.00, 0.00), (0.88, 0.00), (1.02, 0.12), (1.08, 0.28),
        (1.02, 0.45), (0.88, 0.58), (0.68, 0.72), (0.54, 0.90),
        (0.48, 1.18), (0.43, 2.55), (0.55, 3.10), (0.74, 3.43),
        (0.86, 3.55), (0.91, 3.72), (0.82, 3.86), (0.66, 3.94),
        (0.64, 4.05), (0.77, 4.14), (0.84, 4.29), (0.79, 4.41),
        (0.62, 4.48), (0.50, 4.55), (0.46, 5.12), (0.00, 5.12),
    ]

    pawn_profile = [
        (0.00, 0.00), (0.84, 0.00), (0.97, 0.11), (1.02, 0.28),
        (0.98, 0.44), (0.86, 0.57), (0.72, 0.66), (0.62, 0.78),
        (0.54, 1.02), (0.47, 2.18), (0.54, 2.55), (0.69, 2.78),
        (0.82, 2.86), (0.88, 3.00), (0.82, 3.13), (0.66, 3.20),
        (0.48, 3.24), (0.45, 3.37), (0.57, 3.45), (0.68, 3.63),
        (0.72, 3.85), (0.67, 4.07), (0.54, 4.25), (0.32, 4.37),
        (0.00, 4.40),
    ]

    king_tilt = empty("WhiteKing_Tilt", (-1.58, 0.0, 0.42))
    king_tilt.rotation_euler = (math.radians(-4), math.radians(-19), math.radians(-10))
    king_spin = empty("WhiteKing_Spin")
    king_spin.parent = king_tilt
    king = lathe("WhiteKing_Body", king_profile, white)
    parent_keep_transform(king, king_spin)
    cross_vertical = cube_part("WhiteKing_Cross_V", (0.0, 0.0, 5.52), (0.16, 0.16, 0.48), white)
    cross_horizontal = cube_part("WhiteKing_Cross_H", (0.0, 0.0, 5.55), (0.48, 0.16, 0.15), white)
    parent_keep_transform(cross_vertical, king_spin)
    parent_keep_transform(cross_horizontal, king_spin)

    pawn_tilt = empty("BlackPawn_Tilt", (1.42, 0.30, 1.58))
    pawn_tilt.rotation_euler = (math.radians(4), math.radians(17), math.radians(7))
    pawn_spin = empty("BlackPawn_Spin")
    pawn_spin.parent = pawn_tilt
    pawn = lathe("BlackPawn", pawn_profile, black)
    parent_keep_transform(pawn, pawn_spin)

    animate_spin(king_spin, turns=1.0)
    animate_spin(pawn_spin, turns=-1.0)

    # Camera frontal ortografica para manter a composicao grafica da referencia.
    camera_data = bpy.data.cameras.new("Camera")
    camera = bpy.data.objects.new("Camera", camera_data)
    bpy.context.collection.objects.link(camera)
    camera.location = (0.10, -18.0, 3.55)
    camera.data.type = "ORTHO"
    camera.data.ortho_scale = 9.4
    track_to(camera, (0.0, 0.0, 3.35))
    bpy.context.scene.camera = camera

    add_area_light("Key Light", (-5.0, -7.0, 9.0), 1250, 5.0, (1.0, 0.96, 0.90))
    add_area_light("Rim Light", (5.5, 0.5, 7.0), 1100, 4.0, (0.65, 0.76, 1.0))
    add_area_light("Fill Light", (0.0, -4.0, 1.0), 650, 3.0, (1.0, 1.0, 1.0))

    scene = bpy.context.scene
    scene.frame_start = 1
    scene.frame_end = FRAME_END + 1
    scene.render.fps = FPS
    scene.render.engine = "BLENDER_EEVEE_NEXT"
    scene.render.resolution_x = 1080
    scene.render.resolution_y = 1080
    scene.render.resolution_percentage = 70
    scene.render.film_transparent = True
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.filepath = os.path.join(OUTPUT_DIR, "ftwo_chess_preview.png")
    scene.world.color = (0.012, 0.012, 0.018)

    # Gestao de cor com contraste elegante sem estourar o branco.
    scene.view_settings.look = "AgX - Medium High Contrast"

    scene.frame_set(1)
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUTPUT_DIR, "ftwo_chess_scene.blend"))
    bpy.ops.render.render(write_still=True)
    bpy.ops.export_scene.gltf(
        filepath=os.path.join(OUTPUT_DIR, "ftwo_chess_animated.glb"),
        export_format="GLB",
        export_animations=True,
        export_apply=True,
        export_yup=True,
    )

    print(f"Cena pronta em: {OUTPUT_DIR}")


if __name__ == "__main__":
    build_scene()
