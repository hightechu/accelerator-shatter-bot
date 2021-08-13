// ToD Module
function truth(message){
    var messages = ['How old are you', 'What is your favorite icecream', 'What would you do if you had 17 billion dollars'];
    var rnd = Math.floor(Math.random() * messages.length);

    message.channel.send(messages[rnd]);
    // return messages[rnd]
}
function dare(message){
    var messages = ['Take a bite out of the oldest fruit/vegtable in your kitchen', 'Tell someone you know that you love playing among us and wish were the imposter', 'Chug down 1 liter of water']
    var rnd = Math.floor(Math.random() * messages.length);

    message.channel.send(messages[rnd]);
    // return messages[rnd]
    
}
// function embed(message){
//     const embed = new Discord.MessageEmbed()
//             .setColor('#20C19E')
//             .setTitle('HighTechU')
//             .setURL('https://hightechu.ca/')
//             .setAuthor('HighTechU Bot', 'https://hightechu.ca/wp-content/uploads/2019/09/logo-2-150x150.png', 'https://hightechu.ca')
//             .setDescription('Want to learn more about HighTechU?')
//             .setThumbnail('https://pbs.twimg.com/profile_images/1349456985557757967/cUPt5g5F_400x400.jpg')
//             .addFields(
//                 { name: 'HighTechU', value: 'Join us this summer for our 5th, 6th, or 7th Cohort! Visit https://www.hightechu.ca for more information!' },
//                 { name: '\u200B', value: '\u200B' },
//                 { name: 'August Cohort', value: 'August 9th - 13th', inline: true },
//                 { name: 'August Cohort', value: 'August 16th - 20th', inline: true },
//                 { name: 'August Cohort', value: 'August 23rd - 27th', inline: true },
//             )
//             .setTimestamp()
//             .setFooter('Powered by UVic Engineering', 'https://hightechu.ca/wp-content/uploads/2019/09/logo-2-150x150.png');

//         // Send Message
//         message.channel.send(embed);
// }
module.exports = {
    // Name of Command
    name: 'tod',
    // Description of Command
    description: 'tod',
    //how to use command properly
    usage: '[t/d]',
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
        const ToD = args;
        // Send Message
        if (ToD == 't') {
            // rndmessage(message)
            truth(message)
            // embed (truth(message))
           
        }
        else if(ToD == 'd'){
            // rndmessage(message)
            // embed (dare(message))
            dare(message)
        }
    
    },
};