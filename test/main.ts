import * as chai from "chai";
import debcheck from "../index";




debcheck('n2n').then((a) => {

    if (a) {
        console.log("okk")
    } else {
        console.log("nok")

    }

})

debcheck('apt').then((a) => {

    if (a) {
        console.log("okk")
    } else {
        console.log("nok")

    }

})
