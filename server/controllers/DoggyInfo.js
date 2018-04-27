const axios = require('axios');

const allDogInfo = [];
const prefix = ['Sir ', 'Duke ', 'Mr ', 'Buddy ', 'Missy ', 'Sargent ', 'Senior ', 'Seniorita ', 'Commander ', 'King ', 'Queen ', 'Flopsy ', 'Princess ', 'Madam ', 'Archduke ', 'Ricky '];
const suffix = ['droopy-jowls', 'fluffy-pants', 'fiddle-sticks', 'big-borf', 'cutsie-poo', 'snuggles', 'silly-snout', 'fluffy-butt', 'beige-booty', 'snarky-paws', 'floppy-ears', 'fun-timez', 'grouchy-snout', 'querly-tail', 'yeezy-pup', 'boof'];
let id = 0;


module.exports = {
    getDoggo: (req, res) => {

        const randoPrefix = prefix[Math.floor(Math.random() * prefix.length)];
        
        const randoSuffix = suffix[Math.floor(Math.random() * suffix.length)];
        var dogName = randoPrefix + randoSuffix;
        id++;

        axios.get('https://dog.ceo/api/breeds/image/random').then(
            response => { let dogImgData = response.data.message;
        //axios.get('/api/doggos/name').then(
            //res => { 
                let fullDogo = {
                    name: dogName,
                    img: dogImgData,
                    id
                }

                allDogInfo.push(fullDogo);
                console.log(allDogInfo);
                res.send(allDogInfo);
           // }).catch( (error) => {console.log(error)} )
        } ).catch( (error) => {console.log(error)} )

    },


    removeDoggo: (req, res) => {
        const deleteDoggo = req.params.id; 
        dogIndx = allDogInfo.findIndex (dog => dog.id == deleteDoggo);
        allDogInfo.splice(dogIndx, 1)
       
        res.status(200).send(allDogInfo);
    }
}