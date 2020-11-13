const express = require('express');
const serverRoutes = require('./members');
const request = require('supertest');

const allMembers = require('./status200.json');

const app = express();
app.use('/api/members', serverRoutes);

describe('testing server routes', () => {
    it('GET / members - success', async () => {
        const { text } = await request(app).get('/api/members/');
        const parsed = JSON.parse(text);
        expect(parsed[0].name).toEqual('John Doe');
    })
})