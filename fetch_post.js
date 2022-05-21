async function postData(url='', data={}){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })

    console.log(response)
    let rbody = response.json()
    console.log(rbody)
}

const postUrl = "https://p2d.tkeeper.net/devices/push_glogs"
const params = { apiKey: 123456, kod: 'tVlfye0s1TcXocLk', staffid: 30, enrollid: 30038, verifymode: 0, inoutmode: 0, tahun: 2022, bulan: 5, hari: 20, jam: 16, minit: 55, saat: 30}

postData(postUrl, params).then((data) => {
    console.log('post successfully')
})