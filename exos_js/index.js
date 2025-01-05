
// function fibo(nombre_iteration){
//     let a = 0
//     let b = 1
//     let c = 0
//     for (let i = 0; i < nombre_iteration; i++){
//         c=a;
//         a= a+b;
//         b=c;
//         alert(a);
//     };  
// };
// fibo(10)

function random_dices(nbr_draw){
    let b = []
    let c= 0
    let d=0
    for(let i=0; i<nbr_draw;i++){ 
            
        if(b.includes(a)==false){
            b.push(a)
            if (b.length == 6){
                c+=i
                i=0
                d++
                b=[]
                if(d==1000000000){
                    console.log("en moyenne")
                    console.log((c/d).toFixed(4))
                    break
                }
        }}
    }

}
//random_dices(1000000000000)


function rabbit_turtle(nbr_draw){
    let turtle = 0;
    let turtle_win = 0;
    let rabbit_win = 0;
    let c = 0;
    for(let i = 0; i<nbr_draw; i++){
        let a = Math.floor(Math.random() * 6) + 1;
        if(a==6){

            //console.log("le lapin a gagné");
            rabbit_win +=1;
            c++;
            a=0;
            turtle = 0;
        }
        else{
            turtle += 1;
            a=0;
            if(turtle == 6){
                //console.log("la tortue à gagné");
                turtle_win +=1;
                c++;
                turtle = 0;
            }
        }
        
        i=0;
        
        
        if(c==10000000){
            console.log("le lapin gagne dans", (rabbit_win/c).toFixed(4));
            console.log("la tortue   gagne dans", (turtle_win/c).toFixed(4));
            break
        }


    };

}
rabbit_turtle(100000000000000000000)




