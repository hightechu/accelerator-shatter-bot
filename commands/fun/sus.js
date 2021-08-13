// sus Module
module.exports = {
    // Name of Command
    name: 'sus',
    // Description of Command
    description: 'sus',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 2,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('amogus');
    },
};
