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

      {/* Button components */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Button Variants:</h2>
        
        <div className="flex flex-wrap gap-4 items-center">
          <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Small Rounded-md" size="small" shape="rounded-md" />
          <Button title="Small Rounded-full" size="small" shape="rounded-full" />
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button title="Medium Rounded-full" size="medium" shape="rounded-full" />
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Button title="Large Rounded-sm" size="large" shape="rounded-sm" />
          <Button title="Large Rounded-md" size="large" shape="rounded-md" />
          <Button title="Large Rounded-full" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Landing