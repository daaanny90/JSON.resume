import { CvComponent } from "@/utils/CvComponent";

type Props = { 
  section: string;
  link: string;
  type: 'desktop' | 'mobile';
};
export class SidebarItem extends CvComponent {
  props: Props;

  constructor(props: Props) {
    super();
    this.props = props;
  }

  render() {
    if (this.props.type === 'desktop') {
      return `
      <a href="#${this.props.link}" class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <!--
                Heroicon name: outline/home
  
                Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
              -->
              <svg class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              ${this.props.section}
            </a>
      `;
    }

    return `
    <a href="#${this.props.link}" class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            <!--
              Heroicon name: outline/home

              Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
            -->
            <svg class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            ${this.props.section}
          </a>
    `;
  }
}