const HeaderComponent = require("./HeaderComponent")

// @ponicode
describe("toggleNav", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Anas", "George"], ["Anas", "Edmond", "Michael"], ["Michael", "Michael", "George"]]
        inst = new HeaderComponent.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.toggleNav()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("toggleModal", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Edmond"], ["Anas", "Michael", "Anas"], ["Pierre Edouard", "Michael", "Anas"]]
        inst = new HeaderComponent.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.toggleModal()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleLogin", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Anas", "Michael"], ["Pierre Edouard", "Michael", "Michael"], ["Edmond", "Edmond", "Pierre Edouard"]]
        inst = new HeaderComponent.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleLogin({ preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleLogin({ preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleLogin(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
