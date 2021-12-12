const tools = require("./tools.js");
const pigments= {
	black: "#191918",
	white: "#fcfbe3",
	blue: "#006699",
	red: "#9a0000",
	yellow: "#ffcc00",
	gray: "#898988",
	darkgray: "#4b4b44"
};
const prefix = "seed-";
module.exports = [
{
	id: prefix + "1637453251", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,6, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 2,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453307", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 4,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453341", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 4,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453395", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 4,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453447", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 3,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453476", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.blue, 0,"blue"], [pigments.yellow, 2,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453513", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 2,"gray"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453559", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 2,"gray"], [pigments.blue, 0,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 1,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453579", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 2,"gray"], [pigments.blue, 0,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 1,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453601", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 2,"gray"], [pigments.blue, 1,"blue"], [pigments.yellow, 0,"yellow"], [pigments.red, 0,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
{
	id: prefix + "1637453630", //date +%s
	dimensions: {width: 12*300, height: 12*300, name: "AR12x12"},
	npages: 48,
	pigments: [ [pigments.black,8, "black"], [pigments.white,12,"white"], [pigments.gray, 0,"gray"], [pigments.blue, 1,"blue"], [pigments.yellow, 1,"yellow"], [pigments.red, 1,"red"]],
	mixer: tools.reifyWeightedArray,
	colors: (pigments, mixer) => {
		return mixer(pigments);
	}
},
]