'use strict';
const db = require('../models/models');
const _ = require('lodash');

exports.inbox = (req, res, next) => {
  db.Message.hydrateMessages(req.user.id).then(messages => res.send(messages)).catch(next);
};

exports.sent = (req, res, next) => {

};

exports.contact = (req, res, next) => {
  return db.Message.create({
    to: req.params.uid,
    subject: req.body.subject,
    body: req.body.body,
    user_id: req.user.id
  }).then(message => res.send(message)).catch(next);
};

exports.reply = (req, res, next) => {
  return db.Message.create({
    body: req.body.body,
    user_id: req.user.id,
    message_id: req.params.mid
  }).then(message => res.send(message)).catch(next);
};

exports.remove = (req, res, next) =>  {
  // delete then return new (pruned) inbox
  return db.Message.destroy({where:{id: req.params.mid}}).then(() => exports.inbox(req, res, next));
};