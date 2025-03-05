import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const NotificationTab = () => {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [updates, setUpdates] = useState(true);
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>

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
          <Switch id="updates" checked={updates} onCheckedChange={setUpdates} />
        </div>
      </div>
    </div>
  );
};

export default NotificationTab;
