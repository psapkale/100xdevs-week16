import { Admin } from '@repo/ui/admin';
import { InputComponent } from '@repo/ui/input-component';

export default function () {
   return (
      <div>
         <h1>Hi this component use admin component</h1> <Admin />
         <h1>and input component</h1>{' '}
         <InputComponent>
            <h2>Hello from input component</h2>
         </InputComponent>
      </div>
   );
}
