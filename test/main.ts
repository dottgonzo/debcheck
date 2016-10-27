import * as chai from "chai";
const expect = chai.expect;

import debcheck from "../index";



describe("Check deb packages", function () {
    describe("check if installed package return true", function () {

        it("apt is installed so will return true", function (done) {

            debcheck('apt').then((a) => {
                expect(a).to.be.a("boolean").that.equal(true)
                done()
            }).catch((err) => {
                expect(err).to.not.exist;
                done()
            })

        });
    });
    describe("check if not installed package return false", function () {


        it("n2n is not installed so will return false", function (done) {
            debcheck('n2n').then((a) => {
                expect(a).to.be.a("boolean").that.equal(false)
                done()
            }).catch((err) => {
                expect(err).to.not.exist;
                done()
            })



        });
    });

    describe("check if absurde package return false", function () {


        it("zzzz is absurde and it return false", function (done) {
            debcheck('zzzz').then((a) => {
                expect(a).to.be.a("boolean").that.equal(false)
                done()
            }).catch((err) => {
                expect(err).to.not.exist;
                done()
            })



        });
    });


});





