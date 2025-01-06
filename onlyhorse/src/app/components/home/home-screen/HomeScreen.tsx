"use client";

import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

const HomeScreen = () => {
  return (

    <LogoutLink >
      <Button variant="ghost">Logout</Button>
    </LogoutLink>
  )
}

export default HomeScreen