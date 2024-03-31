import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { 
  ViFileTypeReactjs, 
  ViFileTypeVue, 
  ViFileTypeTypescriptOfficial,
  ViFileTypeNode,
  ViFileTypeCsharp2,
  CoDotNet,
  ViFileTypePgsql,
  SiAmazondynamodb,
  CoAmazonAws,
  ViFileTypeTerraform,
  BiGithub,
  CoOctopusDeploy
} from 'oh-vue-icons/icons'

addIcons(
  ViFileTypeReactjs, 
  ViFileTypeVue, 
  ViFileTypeTypescriptOfficial, 
  ViFileTypeNode,
  ViFileTypeCsharp2,
  CoDotNet,
  ViFileTypePgsql,
  SiAmazondynamodb,
  CoAmazonAws,
  ViFileTypeTerraform,
  BiGithub,
  CoOctopusDeploy
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon)
})