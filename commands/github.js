async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖  𝐇4𝐒𝐒𝐀1𝐍 𝐓𝐇𝐄 𝐆𝐎𝐒𝐓__/💀⚠️*

*📂 GitHub Repository:*
Not public

*📢 Official Channel:*
Nai ekon👀

_Do you like HUSSAIN X BOT?? ⭐!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'KnightBot MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
