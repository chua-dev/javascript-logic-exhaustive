let fs = require('fs')
let files = fs.readdirSync('/img')

const labels = [] //need to get from folders
const images = [] //5 images in each folder

// return the format label: [descrip1, descrip2]
const labeledFacesDescriptors = await Promise.all(
    labels.map(async label => {
        const imgUrl = `img/${label}.jpg`
        const img = await faceapi.fetchImage(imgUrl)

        const detection = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()

        if (!detection) {
            throw new Error(`no face detection for ${label}`)
        }

        const faceDescriptor = [detection.discripter]
        return new faceapi.LabeledFacesDescriptors(label, faceDescriptor)
    })
)

const faceMatcher = new faceapi.FaceMatcher(abeledFacesDescriptors)

const detection = await faceapi.detectAllFaces(image)



/*function loadLabeledImage() {
    const labels = ['Amir', 'Basir', 'Cat', 'Desmond']
    return Promise.all(
        labels.map(async label => {
            const descriptions = []
            for (let i=1; i < 6; i++) {
                const img = await faceapi.fetchImage(`The url here ${label}${i}`)
                const detections = await faceapi.detectSingleFace(img)
            }
        })
    )
}*/