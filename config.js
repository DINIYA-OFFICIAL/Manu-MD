//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : MANU-MD
//  * @author : Manul Official
//  * @youtube : https://www.youtube.com/@ManulOfficialTech
//  * @description : Manu-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Manul Official
//GitHub: @manulofficial7
//WhatsApp: +94742274855
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: manulofficial7.
//   * Credit To Manul Official
//   * © 2024 MANU-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"IJ0PSwHFYsgQXda/CwZeZaunk7ykEeFrWJiYb0we3EA="},"public":{"type":"Buffer","data":"cXaF8+OE2QAAFNpMdXWmTqpEU0iYktNi6Kq3RIUpJUQ="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mCXSj5t9z19/xnAQOWvUa2oG30ca1/2U0EVLW0gx3HE="},"public":{"type":"Buffer","data":"Y/qdMNHz5unn8bQXr3wGSa4TA8Z02JDKN5bWKEQnogc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KN5gVwPyb0h9axp7NQLxl9k9UxLVEC/sEl5c5MDTH3M="},"public":{"type":"Buffer","data":"OFo0f3sjLU07crqvHTS8uYP6D7VNAHgFDVckaUYL7GY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"MIHwkl+E6QfmA79pVxGwUTHwCn8XzCasmlBMFhJSQFE="},"public":{"type":"Buffer","data":"8TtABXJw0gKgkZTgOWp0FbdzQD11a9nKzv0Ief0dgA8="}},"signature":{"type":"Buffer","data":"TXRbMdKENkmADc3hahKXY/Um2aWp5dK0/8wyudwnEUIJJVBElg27rLHZiXy3EPj3/4bl/vlyU1H2wMd4v3tHgQ=="},"keyId":1},"registrationId":168,"advSecretKey":"bQ1q4lvkD7riUR1/plnF1YLQk7xXV677T1B/8ILtiF8=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"56r_tLQXSLSJHc8dmx_erA","phoneId":"1e0e1258-b562-4e9e-a965-f233c1f99892","identityId":{"type":"Buffer","data":"tCaRGoiSJhaGaJ17f2UQ0u45m/s="},"registered":true,"backupToken":{"type":"Buffer","data":"4plWMvZPoLZ9cusTHiIZmC9d+Pg="},"registration":{},"pairingCode":"M31RV54D","me":{"id":"94768697409:16@s.whatsapp.net"},"account":{"details":"CPOk5/EHEO+N5LgGGAIgACgA","accountSignatureKey":"myFbFKigaLN0Sjgrpee6LgScZvhcCKwqaNDlZmqEUTI=","accountSignature":"9nEge1DXXMJsmwWqxHl3a2mmRLpaNkssIETr4sKaquYiR5CR2lYz1Pp8PJW80HVNK/W+/xUMPEThFdJHJewfBQ==","deviceSignature":"TtTXwYaXLWFP5cNI6AZAHH3ITCfdmKNlXF7P1iCBtkAG5z8OYVt9OF2O6X6BGNCVs4CFbbhCKDhLlQk9w+uvjg=="},"signalIdentities":[{"identifier":{"name":"94768697409:16@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZshWxSooGizdEo4K6Xnui4EnGb4XAisKmjQ5WZqhFEy"}}],"platform":"android","lastAccountSyncTimestamp":1729693436}", // Session id එක දාන්න " " ඕව මැදට creds.json දානව නම් ඕව වෙනස් කරන්න එපා...✓💚
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "hi",
MENU_IMG : process.env.MENU_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
MODE : process.env.MODE || "public", // ඔයාට විතරක් වැඩ කරන්න් ඕනි නම් "private" දාන්න... හැමෝටම වැඩ කරන්න නම් "public" , ගෲප් වලට විතරක් ඕනි නම් "groups" දාන්න...✓💚 
ANTI_PHOTO: process.env.ANTI_PHOTO || "true",  // පොටෝ දැම්මාම ඩිලීට් වෙන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
ANTI_STICKER: process.env.ANTI_STICKER || "true",  // ස්ටිකර් දැම්මාම ඩිලීට් වෙන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
WARN_COUNT : process.env.WARN_COUNT || "3",

AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //ස්ටේට්ස් විව් ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
AUTO_REACT: process.env.AUTO_REACT || "false", //ඔටෝ රිඇක්ට් වෙන්න් ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true", //කමාන්ඩ් Read වෙන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
AUTO_VOICE: process.env.AUTO_VOICE || "true", //ඔටෝ වොයිස් යන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
MENU: process.env.MENU || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
ANTI_LINK: process.env.ANTI_LINK || "true", //Whatsapp Group ලින්ක් දැම්මාම ඩිලීට් වෙන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "true", // හැම වෙලේම ඔන්ලයි ඉන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
AUTO_TYPING : process.env.AUTO_TYPING || "false",
AUTO_RECORDING : process.env.AUTO_RECORDING || "false", //ඔටෝ රෙකෝඩින් පෙන්නන්න ඕනි නම් "true" තියන්න, එපා නම් "false" දාන්න...✓💚
OWNER_NUMBER : process.env.OWNER_NUMBER || "94742274855", // ඔයාගෙ නම්බරේ ඔතනට දාගන්න මුලට 94 තියෙන්න ඕනි 0 දාන්න එපා !
DELCHAT : process.env.DELCHAT || "pm",
FOOT : process.env.FOOT || "🧚‍♀️𝗠𝗔𝗡𝗨-𝗠𝗗-𝗩❼💗",
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1500': process.env.MAX_SIZE,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
