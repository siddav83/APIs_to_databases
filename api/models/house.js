const db = require ('../dbConfig')

const Character = require("./character")


class House {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.sigil = data.sigil
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let houseData = await db.query(`SELECT * FROM houses WHERE id = $1;`, [ id ]); 
                let house = new House(houseData.rows[0]);
                resolve (house);
            } catch (err) {
                reject('House not found');
            }
        });
    }

    // get dogs(){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             const dogsData = await db.query(`SELECT * FROM dogs WHERE owner_id = $1;`, [ this.id ]);
    //             const dogs = dogsData.rows.map(d => new Dog(d));
    //             resolve(dogs);
    //         } catch (err) {
    //             reject("Owner's dogs could not be found");
    //         };
    //     });
    // };

}

module.exports = House;
