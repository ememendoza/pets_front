import { Login } from '@/components/component/login'
import { getPets } from '../app/api/pets';

export default function Page() {
  getPets();
  return (
    <div>
      <Login />
    </div>
  )
}
