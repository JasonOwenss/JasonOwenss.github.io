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
  CoOctopusDeploy,
  HiArrowSmDown,
  MdMailOutlined,
  BiTelephone
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
  CoOctopusDeploy,
  HiArrowSmDown,
  MdMailOutlined,
  BiTelephone
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon)
})