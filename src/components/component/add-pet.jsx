
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {NavBar} from '@/components/component/nav-bar'

export function AddPet() {
  return (
    <header>
      <NavBar/>
      <div className="max-w-3xl mx-auto p-6 sm:p-8">
        <h1 className="text-3xl font-bold mb-6 text-black">Registro de Mascotas</h1>
        <form className="grid gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="id">ID</Label>
              <Input id="id" placeholder="Ingresa el ID de la mascota" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Ingresa el nombre de la mascota" type="text" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="birthdate">Fecha de Nacimiento</Label>
              <Input id="birthdate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Mascota</Label>
              <Select id="type">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de mascota" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="perro">Perro</SelectItem>
                  <SelectItem value="gato">Gato</SelectItem>
                  <SelectItem value="ave">Ave</SelectItem>
                  <SelectItem value="reptil">Reptil</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="gender">Género</Label>
              <RadioGroup defaultValue="male">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="gender-male" value="male" />
                    <Label htmlFor="gender-male">Macho</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="gender-female" value="female" />
                    <Label htmlFor="gender-female">Hembra</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="size">Tamaño</Label>
              <Select id="size">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tamaño" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pequeño">Pequeño</SelectItem>
                  <SelectItem value="mediano">Mediano</SelectItem>
                  <SelectItem value="grande">Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <Input id="color" placeholder="Ingresa el color de la mascota" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="history">Historia</Label>
              <Textarea
                className="min-h-[100px]"
                id="history"
                placeholder="Ingresa la historia de la mascota" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="skills">Habilidades Especiales</Label>
              <Input
                id="skills"
                placeholder="Ingresa las habilidades especiales de la mascota"
                type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="energy">Nivel de Energía</Label>
              <Slider defaultValue={[5]} id="energy" max={10} min={1} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="compatibility">Compatibilidad</Label>
              <Select id="compatibility">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona la compatibilidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                  <SelectItem value="baja">Baja</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Estado</Label>
              <RadioGroup defaultValue="available">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="status-available" value="available" />
                    <Label htmlFor="status-available">Disponible</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="status-adopted" value="adopted" />
                    <Label htmlFor="status-adopted">Adoptado</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="vaccines">Vacunas</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="vaccines" />
                <Label htmlFor="vaccines">Vacunado</Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sterilized">Esterilizado</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="sterilized" />
                <Label htmlFor="sterilized">Esterilizado</Label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="hospitalizations">Hospitalizaciones</Label>
              <Textarea
                className="min-h-[100px]"
                id="hospitalizations"
                placeholder="Ingresa las hospitalizaciones de la mascota" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="images">Imágenes</Label>
              <Input id="images" multiple type="file" />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Registrar Mascota
          </Button>
        </form>
      </div>
    </header>
  );
}
