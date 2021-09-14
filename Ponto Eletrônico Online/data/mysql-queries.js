// Retorna Promisse para tratamento da resposta à query
function list(connection){
    return new Promise((resolve, reject) =>
        connection.query(
                'SELECT * FROM diary', 
                (err, results) => {
                    if(err) return reject(err)
                    resolve(results)
                }
            )
        )
}

function submit(connection, form){
    return new Promise((resolve, reject) => 
        connection.query(
            `INSERT INTO diary 
            (activity, startDate, startHour, stopDate, stopHour, tag, descript) VALUES 
            (?, ?, ?, ?, ?, ?, ?)`,
            Object.values(form),
        
            (err, results) => {
                if(err) return reject(err)
                resolve(results)
            }
        )
    )
}


module.exports = {list, submit}