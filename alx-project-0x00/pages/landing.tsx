import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      
      {/* Card components */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Button components - Using only rounded-sm, rounded-md, rounded-full */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Button Variants:</h2>
        
        {/* Small buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <Button title="Small Rounded-sm" styles="" size="small" shape="rounded-sm" />
          <Button title="Small Rounded-md" styles="" size="small" shape="rounded-md" />
          <Button title="Small Rounded-full" styles="" size="small" shape="rounded-full" />
        </div>

        {/* Medium buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <Button title="Medium Rounded-sm" styles="" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded-md" styles="" size="medium" shape="rounded-md" />
          <Button title="Medium Rounded-full" styles="" size="medium" shape="rounded-full" />
        </div>

        {/* Large buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <Button title="Large Rounded-sm" styles="" size="large" shape="rounded-sm" />
          <Button title="Large Rounded-md" styles="" size="large" shape="rounded-md" />
          <Button title="Large Rounded-full" styles="" size="large" shape="rounded-full" />
        </div>

        {/* Additional examples with styles prop */}
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <Button 
            title="Custom Style" 
            styles="bg-green-500 hover:bg-green-600" 
            size="medium" 
            shape="rounded-full" 
          />
          <Button 
            title="Red Button" 
            styles="bg-red-500 hover:bg-red-600" 
            size="small" 
            shape="rounded-md" 
          />
        </div>
      </div>
    </div>
  )
}

export default Landing;