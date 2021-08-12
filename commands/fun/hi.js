// Hi Module
module.exports = {
    // Name of Command
    name: 'hi',
    // Description of Command
    description: 'hi!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('sup!');
    },
};