/**
 * Use the given array of product objects below, 
 * each with their name, price, and quantity sold. Additionally,
 *  you are given a tax rate as a percentage.
 *  Write a function called calculateTotalSalesWithTax that takes in an array
 *  of product objects, along with the tax rate, and
 *  returns the total sales amount including tax.
 */

function calculateTotalSalesWithTax(arr, tax){
        let valur=0;

        for(let i of arr){
            valur = valur + (i["price"] * i["quantity"]);
        }

        let taxs= (tax*valur/100)
        return valur+taxs
}

console.log(
    calculateTotalSalesWithTax(
        [
          { name: 'Apple', price: 0.5, quantity: 10 },
          { name: 'Banana', price: 0.3, quantity: 20 },
          { name: 'Orange', price: 0.6, quantity: 15 },
        ],
        8
      )
)