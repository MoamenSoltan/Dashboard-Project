import React from 'react'
import {SparklineComponent,Inject,SparklineTooltip} from '@syncfusion/ej2-react-charts'


 {/* sparkLine component //visit syncfusion documentation for parameters*/}


const SparkLine = ({id,width,height,data,color,currentColor,type}) => {
  return (
    
      <SparklineComponent id={id} height={height} width={width} dataSource={data} type={type} lineWidth={1}
      valueType='Numeric' tooltipSettings={{
                visible: true, format: '${x} : data ${y}',
                trackLineSettings :{visible:true},
            }} fill={color} border={{color:currentColor,width:2}} xName='x' yName='y' >

        <Inject services={[SparklineTooltip]}/>

      </SparklineComponent>
      

  )
}

export default SparkLine
/**
 * Creating a custom component around the Syncfusion `SparkLineComponent` has several advantages compared to directly implementing the component itself:

1. **Reusability**: A custom component can be reused in different parts of your application, making it easier to maintain. If you need to use the `SparkLineComponent` with the same or slightly different props in multiple places, you can simply reuse the custom component.

2. **Abstraction**: By wrapping the `SparkLineComponent` in a custom component, you can hide unnecessary implementation details. This makes your code more modular and easier to understand. You can define default values, handle logic, or add additional functionality within your custom component.

3. **Consistency**: A custom component enforces consistency across your app. Whenever you want to modify or update how the `SparkLineComponent` behaves, you only need to update the custom component. This minimizes the chances of inconsistencies when rendering multiple sparkline components across the app.

4. **Flexibility**: You can provide a simpler API for other developers (or yourself) to use by wrapping the complex prop structure of the `SparkLineComponent` in a more intuitive interface. This also allows for easier future changes or enhancements.

5. **Separation of Concerns**: The custom component can handle state or additional logic, while the `SparkLineComponent` focuses solely on rendering. This separation leads to cleaner, more maintainable code, especially as your project grows.

Implementing a custom component fosters scalability and maintainability in larger applications.
 */