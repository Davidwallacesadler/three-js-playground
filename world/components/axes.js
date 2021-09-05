import { Line,
        LineBasicMaterial,
        Vector3,
        BufferGeometry, 
        FontLoader,
        TextGeometry,
        MeshBasicMaterial,
        Group,
        Mesh } from "three"

function createAxes() {
    const group = new Group()

    // Axes Lines:
    const scale = 1000
    const posX = new Vector3(scale,0,0)
    const negX = new Vector3(-scale,0,0)
    const posY = new Vector3(0,scale,0)
    const negY = new Vector3(0,-scale,0)
    const posZ = new Vector3(0,0,scale)
    const negZ = new Vector3(0,0,-scale)

    const xAxisGeo = new BufferGeometry().setFromPoints([negX, posX])
    const yAxisGeo = new BufferGeometry().setFromPoints([negY, posY])
    const zAxisGeo = new BufferGeometry().setFromPoints([negZ, posZ])
    const xColor = 0xff3399 // Pink
    const yColor = 0x3b33ff // Indigo
    const zColor = 0x33ff44 // Green
    const xMaterial = new LineBasicMaterial({
        color: xColor
    })
    const yMaterial = new LineBasicMaterial({
        color: yColor 
    })
    const zMaterial = new LineBasicMaterial({
        color: zColor 
    })

    const xAxis = new Line(xAxisGeo, xMaterial)
    const yAxis = new Line(yAxisGeo, yMaterial)
    const zAxis = new Line(zAxisGeo, zMaterial)
    group.add(xAxis, yAxis, zAxis)
    
    // Axes Labels:
    const labelsAndPositions = [
        {
            text: `X+`,
            position: posX,
            color: xColor,
        },
        {
            text: `X-`,
            position: negX,
            color: xColor,
        },
        {
            text: `Y+`,
            position: posY,
            color: yColor,
        },
        {
            text: `Y-`,
            position: negY,
            color: yColor,
        },
        {
            text: `Z+`,
            position: posZ,
            color: zColor,
        },
        {
            text: `Z-`,
            position: negZ,
            color: zColor,
        },
    ]
    const loader = new FontLoader()
    loader.load('/fonts/helvetiker_regular.typeface.json', function (font) {
        const params = {
            font,
            size: 50,
            height: 0,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 0,
            bevelOffset: 0,
            bevelSegments: 0,
        }
        for(let i = 0; i < labelsAndPositions.length; i++) {
            const labelProperties = labelsAndPositions[i]
            const textGeo = new TextGeometry(labelProperties.text, params)
            const material = new MeshBasicMaterial({
                color: labelProperties.color
            })
            const textMesh = new Mesh(textGeo, material)
            textMesh.position.x = labelProperties.position.x / 2
            textMesh.position.y = labelProperties.position.y / 2
            textMesh.position.z = labelProperties.position.z / 2
            group.add(textMesh)
        }
    })

    return group
}

export { createAxes }