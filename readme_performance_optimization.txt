1) do not over optimize your code as you start writing it 
2) only when you should start optimizing your code when you see the performance problem

because these optimization have cost it is not free there are tread ofs
and you are telling that i want to spend more computer's resources time to improve it and letter it will help at some point of time

good example is our selectors when we are memorizing the selector 


export const selectCartItems=createSelector(
    [selectCartReducer],
    (cart)=>cart.cartItems
)

createSelector this create selector call has cost on the memory 
and it has cost on the rendering time

once we call this memorizing selector it literally storing the output value
and to do that storage it takes time

but at first time it is costly but then after it will not call that selector function again and again


useCallback

when you render or rerender component react go through entire component
line by line hooks by nature more optimize for this process

but any variable you declare that get reinitialize every single time when you render or rerender
but with variable it is very performance because it has very minimal cost

complex is for casting a function
and even with the anonymous function inside the return call react will reinitialize those function every single time
including our named variable 


const func=()=>{

}

because react does not know that this is some thing
()=>{
    
}
brand new or inside variable referencing new value

this is not too costly

but if you have really large application where there are lot of components

so morizing these fuctions may have some performance improvement 

useCallback(()=>{},[when to memorize this function])

value that are passed in dependency array not change that it will give you
entire function not values return from function

i told you in case of hook react know and that why hooks are more optimize
and for that react uses reference  so we do not need to write hooks in
useCallback's dependency array but it still depends on usecases if 
there is hook that change and you want it add you can 

example

const [temp,setTemp]=useState('A')

const handle=useCallback(()=> {
    log(temp);

},[]) here i do not add temp it always give me A even after pressing button

<Button onClick={()=>setTemp('B')}

useCallback momorize the function it self
useMemo momorize the return value of the function

now cartItems.map((item)=> <CartItem/>)

when i add anything to cart it rerender entire list of cartItems

so if i am adding 8th item so my first item is getting render 8 time

to overcome this issue we have momo function that wrap our component

and you need to wrap inner component not outer 

const CartItem=memo(()=>{
    like this
})

check it by profiler
 