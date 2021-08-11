// icebreaker Module
module.exports = {
    // Name of Command
    name: 'icebreaker',
    // Description of Command
    description: 'Icebreaker!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        switch(arges[0]) {
            case 'rnd':
                rndmessage(message);

                function rndmessage(message) {
                    var messages = ['h', 'wow', 'insane', 'hello']
                    var rnd = Math.floor(Math,random() * messages.length);

                    message.channel.send(messages[rnd]);
                }
        }
    }
}