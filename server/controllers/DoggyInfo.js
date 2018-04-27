
const prefix = ['Sir ', 'Duke ', 'Mr ', 'Buddy ', 'Missy ', 'Sargent ', 'Senior ', 'Seniorita ', 'Commander ', 'King ', 'Queen ', 'Flopsy ', 'Princess ', 'Madam ', 'Archduke '];
const suffix = ['droopy-jowls', 'fluffy-pants', 'fiddle-sticks', 'big-borf', 'cutsie-poo', 'snuggles', 'silly-snout', 'fluffy-butt', 'beige-booty', 'snarky-paws', 'floppy-ears', 'fun-timez', 'grouchy-snout', 'querly-tail', 'yeezy-pup'];
let id = 0;


module.exports = {
    getNameAndID: (req, res) => {
        const randoPrefix = prefix[Math.floor(Math.random() * prefix.length)];
        
        const randoSuffix = suffix[Math.floor(Math.random() * suffix.length)];
        var dogName = randoPrefix + randoSuffix;
        id++;
        var dogInfo = {
            name: dogName,
            id
        }
        res.send(dogInfo);
    }
}