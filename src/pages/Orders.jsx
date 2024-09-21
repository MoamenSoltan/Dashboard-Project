import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject,Search,Toolbar } from '@syncfusion/ej2-react-grids'

import { ordersData,contextMenuItems,ordersGrid } from '../data/dummy'

import { Header } from '../components'//another component we made
//note: all array of objects stuff is to be fetched from an API
const Orders = () => {
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20 '>
      {/* mt-20 wont override the md:m-10 */}
      <Header title='Orders' category='page' />
      <GridComponent id='gridcomp' toolbar={['Search']} dataSource={ordersData} allowPaging allowSorting='true'>
        {/* data source is an array of objects */}
        {/* each column Directive has a field prop , in the orders data which is an array of objects , we specify each field in the column directive as a key */}
        {/**the data is key value pairs that represent each field ,meaning each obj in the array (data) has a key value pair for each field,each object is a whole column */}
        <ColumnsDirective>{/**plural */}

        {
          ordersGrid.map((item,index)=>(
            <ColumnDirective  key={index} {...item}/>
            // singular
            // ordersgrid is an array of objects
            //revise template tab in ordersGrid
            /** */
          ))
        }

        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit,Toolbar,Search]}/>
      </GridComponent>
    </div>
  )
}

export default Orders
//notes on spread operator
/**
 * In your React code, you're using the spread operator (`{...item}`) within the `<ColumnDirective>` component. Here's how the spread operator functions in this context:

### Understanding the Spread Operator:
The spread operator (`...`) in JavaScript expands an iterable (like an array or object) into individual elements. In this case, you're working with an array of objects (`ordersGrid`), and each object contains key-value pairs representing the properties of the `<ColumnDirective>`.

### How It Works:
- The array `ordersGrid` contains several objects where each object holds configuration for a column in the grid, with properties like `headerText`, `field`, `width`, `textAlign`, etc.
- The spread operator in `...item` takes all the key-value pairs from each `item` (which is an object) and passes them as individual props to the `<ColumnDirective>` component.
  
So, for each `item` in the `ordersGrid`, the properties like `headerText`, `field`, `textAlign`, etc., are spread and passed as individual props to `<ColumnDirective>`. It's equivalent to writing out each property manually, like this:

```jsx
<ColumnDirective
  key={index}
  headerText={item.headerText}
  field={item.field}
  textAlign={item.textAlign}
  width={item.width}
  template={item.template}
  format={item.format}
/>
```

### Example:
For an entry like this in `ordersGrid`:

```js
{ field: 'CustomerName', headerText: 'Customer Name', width: '150', textAlign: 'Center' }
```

The spread operator will behave as if you wrote:

```jsx
<ColumnDirective
  key={index}
  field="CustomerName"
  headerText="Customer Name"
  width="150"
  textAlign="Center"
/>
```

This saves you from having to manually pass each prop and ensures that all properties of the object get applied to the component automatically.
 * 
 * 
 * 
 * 
 * Yes, that's correct! When you use the spread operator (`{...item}`) on an object in React, the key-value pairs of that object automatically translate into props for the component.

### Explanation:
- In an object like `{ key: value }`, the colon (`:`) separates the property key from its value.
- When you spread this object into a React component, the key becomes the prop name, and the value becomes the prop's value, and the `:` is replaced with `=`.

### Example Breakdown:
Consider the object:

```js
{ field: 'CustomerName', headerText: 'Customer Name', width: '150', textAlign: 'Center' }
```

- `field: 'CustomerName'` turns into `field="CustomerName"` in props.
- `headerText: 'Customer Name'` turns into `headerText="Customer Name"`.
- `width: '150'` turns into `width="150"`.
- `textAlign: 'Center'` turns into `textAlign="Center"`.

So when you spread this object using `{...item}` inside `<ColumnDirective>`, it behaves as if you had explicitly written:

```jsx
<ColumnDirective
  field="CustomerName"
  headerText="Customer Name"
  width="150"
  textAlign="Center"
/>
```

### Key Points:
- The colon (`:`) is used in JavaScript objects to assign values to keys.
- In JSX (React's syntax), props are passed using the equal sign (`=`).
- The spread operator handles this conversion automatically when passing an object’s key-value pairs as props.
 */
/**
 * In the Syncfusion `GridComponent`, the `template` attribute allows you to define custom content for grid cells, headers, or other areas. It is particularly useful when you need to display complex or dynamic data within the grid, such as images, custom buttons, or formatted content, instead of just plain text.

### Key Use Cases of the `template` Attribute:
1. **Cell Template**: Customize how the cell content is displayed in the grid. For example, you can display an image, buttons, or custom HTML content within a cell.
2. **Header Template**: Customize the header of a specific column to include icons, custom labels, or other components.

### Example Use Cases:
1. **Image in a Cell**:
   If you want to display an image in a particular cell, you can use the `template` attribute for that column.

   ```jsx
   export const ordersGrid = [
     {
       headerText: 'Product Image',
       template: gridProductImage,  // Use a template function to render images
       textAlign: 'Center',
       width: '150',
     },
     { 
       field: 'OrderID', 
       headerText: 'Order ID', 
       width: '150',
       textAlign: 'Center'
     }
   ];
   
   // Define the template function
   const gridProductImage = (props) => {
     return (
       <img
         src={props.ProductImage} 
         alt="product" 
         style={{ width: '50px', height: '50px' }}
       />
     );
   };
   ```

   In this example, the `gridProductImage` function generates custom content (an image) for the column. The `props` object contains the data for the current row, and you can access any field such as `props.ProductImage`.

2. **Custom Button in a Cell**:
   You can also add buttons or other interactive elements using the `template` attribute.

   ```jsx
   export const ordersGrid = [
     {
       headerText: 'Actions',
       template: gridActionButtons, // Function to render action buttons
       textAlign: 'Center',
       width: '150',
     },
     { 
       field: 'OrderID', 
       headerText: 'Order ID', 
       width: '150',
       textAlign: 'Center'
     }
   ];
   
   const gridActionButtons = (props) => {
     return (
       <button
         onClick={() => handleAction(props.OrderID)}
       >
         Action
       </button>
     );
   };

   const handleAction = (orderId) => {
     console.log("Action clicked for Order ID: ", orderId);
   };
   ```

3. **Header Template**:
   You can customize the header of a column using a header template.

   ```jsx
   export const ordersGrid = [
     {
       headerText: 'Product Info',
       headerTemplate: gridHeaderTemplate,
       field: 'ProductName',
       width: '150',
       textAlign: 'Center',
     }
   ];

   const gridHeaderTemplate = () => {
     return (
       <div>
         <span>📦 Product Info</span>
       </div>
     );
   };
   ```

   Here, a custom header template adds an icon and some text in the header.

### How to Use the `template` Attribute:
- **Function-Based Templates**: Most commonly, you define a template as a function that returns JSX. The function receives `props`, which contain the current row's data, and the returned JSX is rendered inside the cell or header.
  
- **Inline JSX**: You can also directly pass JSX to the `template` property, but using functions gives you more flexibility and the ability to access row-specific data.

### Other Template Locations:
- **Column Template**: Used to define how each cell in a column should be rendered.
- **Header Template**: Defines the appearance of the column header.
- **Footer Template**: Allows customization of the footer section in aggregate rows.
  
### Example: Full Grid with Templates
```jsx
<GridComponent dataSource={data}>
  <ColumnsDirective>
    <ColumnDirective 
      headerText="Product Image" 
      template={gridProductImage} 
      textAlign="Center" 
      width="120" 
    />
    <ColumnDirective 
      field="OrderID" 
      headerText="Order ID" 
      width="120" 
      textAlign="Center" 
    />
    <ColumnDirective 
      headerText="Actions" 
      template={gridActionButtons} 
      textAlign="Center" 
      width="120" 
    />
  </ColumnsDirective>
</GridComponent>
```

### Summary:
- The `template` attribute in Syncfusion's `GridComponent` is a powerful way to customize how grid cells and headers are displayed.
- It can be used to display images, buttons, or any custom HTML/JSX content within grid cells.
- The `template` can be provided as a function that receives row data (`props`) and returns JSX, which will be rendered for each cell in that column.
 */