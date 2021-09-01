import Saturno from '../img/saturno.jpg'
import Netuno from '../img/netuno.jpg'
import Marte from '../img/marte.jpg'
import Mercurio from '../img/mercurio.jpg'
import Urano from '../img/urano.jpg'
import Venus from '../img/venus.jpg'
import Jupiter from '../img/jupiter.jpg'
import Terra from '../img/terra.jpg'
import Plutao from '../img/plutao.jpg'

const caminho = (planet) => {
    switch(planet){
        case 'Saturno':
            return Saturno
        case 'Netuno':
            return Netuno
        case 'Marte':
            return Marte
        case 'Mercurio':
            return Mercurio
        case 'Urano':
            return Urano
        case 'Venus':
            return Venus
        case 'Jupiter':
            return Jupiter
        case 'Terra':
            return Terra
        case 'Plutão':
            return Plutao
    }
}

export default caminho