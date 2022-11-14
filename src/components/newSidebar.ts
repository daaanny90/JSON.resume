import { CvComponent } from "@/utils/CvComponent";
import { SidebarItem } from "./sidebarItem";

export class NewSidebar extends CvComponent {
  renderSectionsDesktop() {
    let sections = "";
    for (const section of this.config.sections) {
      sections += new SidebarItem({ section: section, link: section, type: 'desktop' }).render();
    }

    return sections;
  }

  renderSectionsMobile() {
    let sections = "";
    for (const section of this.config.sections) {
      sections += new SidebarItem({ section: section, link: section, type: 'mobile' }).render();
    }

    return sections
  }

  render() {
    return `
    <div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div x-show="sidebarOpen" class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

    <div class="fixed inset-0 z-40 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div 
        x-show="sidebarOpen"
        x-transition:enter="transition ease-in-out duration-300 transform"
        x-transition:enter-start="-translate-x-full"
        x-transition:enter-end="translate-x-0"
        x-transition:leave="transition ease-in-out duration-300 transform"
        x-transition:leave-start="translate-x-0"
        x-transition:leave-end="-translate-x-full"
        class="relative flex w-full max-w-xs flex-1 flex-col bg-white"
      >
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div 
          x-show="sidebarOpen"
          x-transition:enter="ease-in-out duration-300"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="ease-in-out duration-300"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          class="absolute top-0 right-0 -mr-12 pt-2"
        >
          <button @click="sidebarOpen = !sidebarOpen" type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <!-- Heroicon name: outline/x-mark -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
          <div class="flex flex-shrink-0 items-center px-4">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
          </div>
          <nav class="mt-5 space-y-1 px-2">
            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
            ${this.renderSectionsDesktop()}
            
          </nav>
        </div>
        <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
          <a href="#" class="group block flex-shrink-0">
            <div class="flex items-center">
              <div>
                <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </div>
              <div class="ml-3">
                <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="w-14 flex-shrink-0">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
      <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div class="flex flex-shrink-0 items-center px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
        </div>
        <nav class="mt-5 flex-1 space-y-1 bg-white px-2">
          <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
          ${this.renderSectionsMobile()}
        </nav>
      </div>
      <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
        <a href="#" class="group block w-full flex-shrink-0">
          <div class="flex items-center">
            <div>
              <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
              <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
  }
}