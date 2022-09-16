# Changelog plugin
Thanks for using our plugin created for showing changelog information in Backstage. This plugin is still in development.

Note: currently it is only possible to direct-link to a markdown file.
Pulling this from a repo is planned to add.

## Installation
Run this command from the `app` package directory:
```shell
yarn add @trimm/plugin-changelog
```

## Configuration

### Add cards to overview tab
```tsx
// packages\app\src\components\catalog\EntityPage.tsx
import { EntityChangelogCard, EntityChangelogContent } from '@trimm/plugin-changelog';

// In the overviewContent.

// Changelog card
<EntitySwitch>
    <EntitySwitch.Case if={isChangelogAvailable}>
        <Grid item md={12}>
            <EntityChangelogCard></EntityChangelogCard>
        </Grid>
    </EntitySwitch.Case>
</EntitySwitch>
```

### Add to catalog-info.yaml (direct-linking is currently the only way)
```yaml
# Example catalog-info.yaml entity definition file
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  # ...
  annotations:
    changelog/source: 'direct'
    changelog/directlink: '<DIRECT LINK TO YOUR CHANGELOG.md>'

```