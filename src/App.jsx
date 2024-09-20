import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import PropertiesPage from "./Pages/PropertiesPage";
import NotFoundPage from "./Pages/NotFoundPage";
import PropertyPage, { propertyLoader } from "./Pages/PropertyPage";
import AddJobPage from "./Pages/AddPropertyPage";
import EditPropertyPage from "./Pages/EditPropertyPage";

const App = () => {
  //ADD NEW PROPERTY LISTING
  const addProperty = async (newProperty) => {
    const res = await fetch("/api/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProperty),
    });
    if (!res.ok) {
      throw new error("Data Not found");
    }
    return;
  };

  //DELETE PROPERTY LISTING

  const deleteProperty = async (id) => {
    const res = await fetch(`/api/properties/${id}`, {
      method: "DELETE",
    });
  };

  //UPDATE PROPERTY LISTING
  const updateProperty = async (property) => {
    const res = await fetch(`/api/properties/${property.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route
          path="/properties/:id"
          element={<PropertyPage deleteProperty={deleteProperty} />}
          loader={propertyLoader}
        />
        <Route
          path="/edit-property/:id"
          element={<EditPropertyPage updatePropertySubmit={updateProperty} />}
          loader={propertyLoader}
        />
        <Route
          path="/sell-property"
          element={<AddJobPage addPropertySubmit={addProperty} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
