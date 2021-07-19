import axios from  'axios';

const postChoosePerson = async(id, choice) => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitoriaMolina/choose-person`
    const body= {
        id: id,
        choice: choice

    }

    return await axios.post(url, body)
}

export default postChoosePerson