const {API} = require("./classes/api")
const {Web} = require("./classes/web")

module.exports ={
  API,
  Web
  /*
  Welcome to ASUKI.js
  This is a package to interact with FB.API!
  This is 2 classes to your bot:
  API - Interact FB API
  Web - Create classes for You bot Dashboard (Custom commands, Prefix, Web-chat from bot as user, Log event, Notify, Error restriction, ...)
 You bot can add extension for Facebook (aka Facension API):
   Sound from Emoji(<API>.getExtension("soundemoji") => @manyong/soundemoji's extension)
 Ready!
  */
}