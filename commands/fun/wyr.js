// wyr Module
function random(message){
    var messages = ["Would you rather always be 10 minutes late or always be 20 minutes early?",
	"Would you rather lose all of your money and valuables or all of the pictures you have ever taken?",
	"Would you rather be able to see 10 minutes into your own future or 10 minutes into the future of anyone but yourself?",
	"Would you rather be famous when you are alive and forgotten when you die or unknown when you are alive but famous after you die?",
	"Would you rather go to jail for 4 years for something you didn't do or get away with something horrible you did but always live in fear of being caught?",
	"Would you rather accidentally be responsible for the death of a child or accidentally be responsible for the deaths of three adults?",
	"Would you rather your shirts be always two sizes too big or one size too small?",
	"Would you rather live in the wilderness far from civilization or live on the streets of a city as a homeless person?",
	"Would you rather the general public think you are a horrible person but your family be very proud of you or your family think you are a horrible person but the general public be very proud of you?",
	"Would you rather live your entire life in a virtual reality where all your wishes are granted or in the real world?",
	"Would you rather be alone for the rest of your life or always be surrounded by annoying people?",
	"Would you rather never use social media sites / apps again or never watch another movie or TV show?",
	"Would you rather have an easy job working for someone else or work for yourself but work incredibly hard?",
	"Would you rather be the first person to explore a planet or be the inventor of a drug that cures a deadly disease?",
	"Would you rather have a horrible short term memory or a horrible long term memory?",
	"Would you rather be completely invisible for one day or be able to fly for one day?",
	"Would you rather be locked in a room that is constantly dark for a week or a room that is constantly bright for a week?",];
    var rnd = Math.floor(Math.random() * messages.length);

    message.channel.send(messages[rnd]);
}
function rndm(message){
    var messages = ['Take a bite out of the oldest fruit/vegtable in your kitchen', 'Tell someone you know that you love playing among us and wish were the imposter', 'Chug down 1 liter of water']
    var rnd = Math.floor(Math.random() * messages.length);

    message.channel.send(messages[rnd]);
}
module.exports = {
    // Name of Command
    name: 'wyr',
    // Description of Command
    description: 'wyr',
    //how to use command properly
    usage: '[a/a]',
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message args
    
        
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 2,
    // Execute Command - Parameters: message
    execute(message, args) {
        //Construct URL
        const wyr = args;
        // Send Message
        if (wyr == 'a') {
            // rndmessage(message)
            random(message)
           
        }
        else if(wyr == 'a'){
            // rndmessage(message)
            rndm(message)
            
        }
    
    },
};

// // sus Module
// function wur(messages) {
//     var messages = ['How old are you', 'What is your favorite icecream', 'What would you do if you had 17 billion dollars'];
//     var rnd = Math.floor(Math.random() * messages.length);
// }
// module.exports = {
//     // Name of Command
//     name: 'wyr',
//     // Description of Command
//     description: 'wyr',
//     // Guild - TRUE
//     guildOnly: true,
//     // Cooldown
//     cooldown: 2,
    
//     // Execute Command - Parameters: message
//     execute(message) {
//         // Send Message
//         message.channel.send(wur[messages]);
//     },
// };