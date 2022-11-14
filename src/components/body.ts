import { CvComponent } from "@/utils/CvComponent";
import Title from "./title";
import { Subtitle } from "./subtitle";
import { SectionSummary } from "./sectionSummary";
import { SectionExperiences } from "./sectionExperiences";
import { NewSidebar } from "./newSidebar";
import { Header } from "./header";

export class Body extends CvComponent {
  // render() {
  //   return `
  //   <div class="py-8">
  //     <div class="flex flex-col mb-5">
  //     ${new Title().render()}
  //     ${new Subtitle({ color: "dark" }).render()}
  //     </div>

  //     ${new SectionSummary().render()}

  //     ${new SectionExperiences().render()}
  //   </div>
  //   `;
  // }

  render() {
    return `
    <div x-data="{ sidebarOpen: false }">
    ${new NewSidebar().render()}
    <div class="flex flex-1 flex-col md:pl-64">
    <div class="sticky top-0 z-40 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden" :class="{'z-10' : sidebarOpen}">
      <button @click="sidebarOpen = !sidebarOpen" type="button" :class="{'z-10' : sidebarOpen}" class="relative z-40 -ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ">
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: outline/bars-3 -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <main class="flex-1">
      <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->
          <div class="py-4">
            ${new Header().render()}
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
  </div>
    `;
  }
}
