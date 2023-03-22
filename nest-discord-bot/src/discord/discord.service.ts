import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, Collection, GatewayIntentBits, REST, Routes } from 'discord.js';

interface DiscordClient extends Client {
    commands?: Collection<any, any>;
}

@Injectable({})
export class DiscordService implements OnModuleInit {
    client: DiscordClient;
    constructor() {
        this.client = new Client({
            intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
        });
    }

    async onModuleInit() {
        const commands = [
            {
                name: 'ping',
                description: 'Replies with Pong!',
            },
        ];

        this.client.on('ready', async () => {
            console.log(`Logged in as ${this.client.user.tag}!`);

            const rest = new REST({ version: '10' }).setToken('TOKEN');
            try {
                console.log('Started refreshing application (/) commands.');
                const CLIENT_ID = this.client.user.id;
                console.log(CLIENT_ID);
                await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        });

        this.client.on('interactionCreate', async (interaction) => {
            if (!interaction.isChatInputCommand()) return;

            if (interaction.commandName === 'ping') {
                await interaction.reply('Pong!');
            }
        });

        // 봇과 서버를 연결해주는 부분
        await this.client.login('TOKEN');
    }
}
