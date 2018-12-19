"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const request = require("supertest");
const app = require("./app");

chai.use(chaiHttp);

describe("Test API", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });

  describe("index", () => {
    it("should return status", async () => {
      const { body } = await request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(body).to.have.property("status", "operational");
    });
  });

  describe("random", () => {
    it("should return number", async () => {
      const { body } = await request(app)
        .get("/random")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(body)
        .to.have.property("number")
        .which.is.a("number");
    });
  });

  describe("version", () => {
    it("should return version", async () => {
      const { body } = await request(app)
        .get("/version")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(body)
        .to.have.property("version")
        .which.is.a("string");
      expect(body).to.have.property("name");
    });
  });
});
