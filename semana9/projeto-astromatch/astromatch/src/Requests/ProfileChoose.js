import axios from  'axios';

const getProfileChoose = async () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitoriaMolina/person`
    
    const res = await axios.get(url)
    return res.data.profile
   
}
export default getProfileChoose

