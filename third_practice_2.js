//callback
function dispalayData(data){
    console.log('Callback:', data)
}

function getData(callback){
    console.log('Загрузка данных...');
    
    setTimeout(() => {
        const data = { name: 'John', age: 30 }; 
        console.log('Данные загружены');

        callback(data);
    }, 2000);
}

getData(dispalayData)


//promise
function getDataPromise(){
    console.log('Загрузка данных...');
    return new Promise((resolve, reject) =>{
        const success = Math.random() > 0.5;

        setTimeout(() => {
            if (success){
                const data = { name: 'John', age: 30 }; 
                console.log('Данные загружены');
                resolve(data);
            } else {
                const error = 'Ошибка при загрузке данных';
                reject(error);
            }
        }, 2000)
    });
}

getDataPromise()
    .then(
        (data) => console.log('Promise:', data)
    )
    .catch(
        (error) => console.error('Promise:', error)
    );


//async await
async function getDataAsync(){
    try {
        console.log('Async:', await getDataPromise());
      } catch (error) {
        console.error('Async:', error); 
      }
}

getDataAsync()