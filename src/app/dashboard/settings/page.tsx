"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [updates, setUpdates] = useState(true);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Account Information</h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue="Jane Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue="jane.doe@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue="I'm a digital marketing specialist with a passion for data analytics."
                />
              </div>

              <div className="pt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">
              Notification Preferences
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications" className="text-base">
                    Push Notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications about account activity
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketing" className="text-base">
                    Marketing Emails
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive emails about new features and offers
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={marketing}
                  onCheckedChange={setMarketing}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="updates" className="text-base">
                    Product Updates
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive updates about product changes
                  </p>
                </div>
                <Switch
                  id="updates"
                  checked={updates}
                  onCheckedChange={setUpdates}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="appearance" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Appearance Settings</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center cursor-pointer bg-blue-50 border-blue-500">
                    <div className="h-20 w-full bg-white rounded mb-2"></div>
                    <span className="text-sm font-medium">Light</span>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center cursor-pointer">
                    <div className="h-20 w-full bg-gray-800 rounded mb-2"></div>
                    <span className="text-sm font-medium">Dark</span>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center cursor-pointer">
                    <div className="h-20 w-full bg-gradient-to-b from-white to-gray-800 rounded mb-2"></div>
                    <span className="text-sm font-medium">System</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>Small</option>
                  <option selected>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Billing Information</h3>

            <div className="mb-6 p-4 border border-blue-100 bg-blue-50 rounded-md">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Current Plan: Free
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Upgrade to PRO for $9/month to unlock all features.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">PRO Plan</h4>
                    <p className="text-sm text-gray-500">$9/month</p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Upgrade
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Advanced analytics
                    </li>
                    <li className="flex items-center text-sm">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Unlimited hashtag research
                    </li>
                    <li className="flex items-center text-sm">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Priority support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
