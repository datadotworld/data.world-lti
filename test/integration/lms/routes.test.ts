import * as chai from 'chai';
import { expect } from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);

import * as app from '../../../src';

const expectedXmlTemplate = [

    '<?xml version="1.0" encoding="UTF-8"?>',
    '<cartridge_basiclti_link xmlns="http://www.imsglobal.org/xsd/imslticc_v1p0"',
    '                         xmlns:blti = "http://www.imsglobal.org/xsd/imsbasiclti_v1p0"',
    '                         xmlns:lticm ="http://www.imsglobal.org/xsd/imslticm_v1p0"',
    '                         xmlns:lticp ="http://www.imsglobal.org/xsd/imslticp_v1p0"',
    '                         xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"',
    '                         xsi:schemaLocation = "http://www.imsglobal.org/xsd/imslticc_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticc_v1p0.xsd',
    '    http://www.imsglobal.org/xsd/imsbasiclti_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imsbasiclti_v1p0.xsd',
    '    http://www.imsglobal.org/xsd/imslticm_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticm_v1p0.xsd',
    '    http://www.imsglobal.org/xsd/imslticp_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticp_v1p0.xsd">',
    '    <blti:launch_url>LAUNCH_URL</blti:launch_url>',
    '    <blti:title>data.world</blti:title>',
    '    <blti:description>Provides users access to their data.world resources.</blti:description>',
    '        <blti:extensions platform="canvas.instructure.com">',
    '            <lticm:property name="tool_id">course_navigation</lticm:property>',
    '            <lticm:property name="privacy_level">public</lticm:property>',
    '            <lticm:options name="course_navigation">',
    '                <lticm:property name="default">enabled</lticm:property>',
    '                <lticm:property name="visibility">members</lticm:property>',
    '                <lticm:property name="enabled">true</lticm:property>',
    '                <lticm:property name="text">data.world</lticm:property>',
    '            </lticm:options>',
    '        </blti:extensions>',
    '    <cartridge_bundle identifierref="BLTI001_Bundle"/>',
    '    <cartridge_icon identifierref="BLTI001_Icon"/>',
    '</cartridge_basiclti_link>',
    ''

].join('\n');


describe('Integration Test(s) - lms/routes', () => {

    it('GET /lti/config should return text/xml response', (done) => {

        chai.request(app)
            .get('/lti/config')
            .end((error, response) => {

                expect(response).to.have.status(200);
                expect(response).to.have.header('Content-Type', 'text/xml; charset=utf-8');

                done();

            });

    });

    it('GET /lti/config should return a predictable xml document', (done) => {

        chai.request(app)
            .get('/lti/config')
            .end((error, response) => {

                let actual = response.text;
                let launchUrlStartIndex = actual.search(/<blti:launch_url>/) + 17;
                let launchUrlEndIndex = actual.search(/<\/blti:launch_url>/);

                let launchUrl = actual.substring(launchUrlStartIndex, launchUrlEndIndex);

                let expected = expectedXmlTemplate.replace(/LAUNCH_URL/, launchUrl);

                expect(actual === expected).to.be.true;

                done();

            });

    });

    it('POST /lti/config should return text/xml response', (done) => {

        chai.request(app)
            .post('/lti/config')
            .end((error, response) => {

                expect(response).to.have.status(200);
                expect(response).to.have.header('Content-Type', 'text/xml; charset=utf-8');

                done();

            });

    });

    it('POST /lti/config should return a predictable xml document', (done) => {

        chai.request(app)
            .post('/lti/config')
            .end((error, response) => {

                let actual = response.text;
                let launchUrlStartIndex = actual.search(/<blti:launch_url>/) + 17;
                let launchUrlEndIndex = actual.search(/<\/blti:launch_url>/);

                let launchUrl = actual.substring(launchUrlStartIndex, launchUrlEndIndex);

                let expected = expectedXmlTemplate.replace(/LAUNCH_URL/, launchUrl);

                expect(actual === expected).to.be.true;

                done();

            });

    });


});
