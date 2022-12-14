import 'antd/dist/reset.css'
import './app.css'

import { FC, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppHeader } from './app-header'
import { AppMenu } from './app-menu'
import { AppRoutes } from './app-routes'

export const App: FC = () => {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="flex flex-col min-h-screen">
          <div className="h-14 pl-4 pr-4 bg-white border-gray-200 border-solid border-0 border-b">
            <AppHeader />
          </div>
          <div className="flex-auto flex">
            <div className="w-40 border-gray-200 border-solid border-0 border-r">
              <div className="sticky top-0">
                <AppMenu />
              </div>
            </div>
            <div className="flex-auto p-4">
              <AppRoutes />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  )
}
