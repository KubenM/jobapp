import React from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Label } from "./components/Label";

export default function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Job Portal Sample</h1>

      {/* Job Search Section */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">Search Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input placeholder="Job title or keyword" />
          <Input placeholder="Location" />
          <Button>Search</Button>
        </div>
      </Card>

      {/* Job Posting Section */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
        <div className="grid gap-4">
          <div>
            <Label>Job Title</Label>
            <Input placeholder="e.g., Software Engineer" />
          </div>
          <div>
            <Label>Location</Label>
            <Input placeholder="e.g., Johannesburg" />
          </div>
          <div>
            <Label>Job Description</Label>
            <Input placeholder="Brief job overview..." />
          </div>
          <Button>Post Job</Button>
        </div>
      </Card>

      {/* Job Listings Section */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">Latest Jobs</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded-lg">
            <h3 className="font-bold">Frontend Developer</h3>
            <p>Location: Cape Town</p>
            <Button className="mt-2">Apply</Button>
          </li>
          <li className="border p-4 rounded-lg">
            <h3 className="font-bold">Project Manager</h3>
            <p>Location: Durban</p>
            <Button className="mt-2">Apply</Button>
          </li>
        </ul>
      </Card>
    </div>
  );
}
