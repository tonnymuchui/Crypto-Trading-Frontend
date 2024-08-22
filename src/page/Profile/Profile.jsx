import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { AccountVerificationForm } from "./AccountVerificationForm";

export const Profile = () => {
  const handleTwoFactorAuth = () => {};
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email:</p>
                  <p className="text-gray-400">tonykanyingah@gmail.com</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name:</p>
                  <p className="text-gray-400">Tonny Muchui</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date of Birth:</p>
                  <p className="text-gray-400">24/5/1998</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality:</p>
                  <p className="text-gray-400">Kenyan</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email:</p>
                  <p className="text-gray-400">tonykanyingah@gmail.com</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name:</p>
                  <p className="text-gray-400">Tonny Muchui</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date of Birth:</p>
                  <p className="text-gray-400">24/5/1998</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality:</p>
                  <p className="text-gray-400">Kenyan</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2FA Authentification</CardTitle>
                {true ? (
                  <Badge className="bg-green-500 text-white space-x-2">
                    <VerifiedIcon size={16} />
                    <span>Enebled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
              <Dialog>
  <DialogTrigger>
    <Button>Enebled 2FA</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Verify your Account</DialogTitle>
    </DialogHeader>
    <AccountVerificationForm handleSubmit={handleTwoFactorAuth}/>
  </DialogContent>
</Dialog>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
